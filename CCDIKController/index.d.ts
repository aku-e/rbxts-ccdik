interface ConstraintInfo {
	ConstraintType: string;
}

declare const ConstraintsMap: Map<Motor6D, ConstraintInfo>;

type CCDIKController = {
	Constraints: typeof ConstraintsMap | undefined;
	LerpMode: boolean;
	LerpAlpha: number;
	ConstantLerpSpeed: number;
	AngularSpeed: number;

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
	new (Motor6DArray: Array<Motor6D>, ConstraintsDictionary?: typeof ConstraintsMap): CCDIKController;
}
declare const CCDIKController: CCDIKConstructor;

export = CCDIKController;
