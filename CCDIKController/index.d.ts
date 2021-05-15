type ConstraintTypes = "BallSocketConstraint" | "Hinge";
type ConstraintsMap = Map<Motor6D, ConstraintInfo>;
type CCDIKController = {
	Constraints: ConstraintsMap | undefined;
	LerpMode: boolean;
	DebugMode: boolean;
	LerpAlpha: number;
	ConstantLerpSpeed: boolean;
	AngularSpeed: number;
	UseLastMotor: boolean;
	RaycastLengthDown: number;
	FootRaycastParams: RaycastParams;
	FootOrientationSystem: boolean;

	GetConstraints(): void;
	GetConstraintsFromMotor(Motor6D: Motor6D, constraintName: string): void;
	CCDIKIterateOnce(goalPosition: Vector3, tolerance: number | undefined, step: number): void;
	CCDIKIterateUntil(
		goalPosition: Vector3,
		tolerance: number | undefined,
		maxBreakCount: number | undefined,
		step: number,
	): void;
	SetupFoot(attachmentNameTable: Array<string>, raycastParams: RaycastParams): void;
	InitDragDebug(): void;
};

interface CCDIKConstructor {
	new (Motor6DArray: Array<Motor6D>, ConstraintsDictionary?: ConstraintsMap): CCDIKController;

	ConstraintInfo: ConstraintInfo;
}

export interface ConstraintInfo {
	ConstraintType: ConstraintTypes;
}

export const CCDIKController: CCDIKConstructor;
